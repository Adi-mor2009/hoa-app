import React, { useEffect, useState } from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import './TenantsPage.css'
import image from '../../asserts/tenants.jpg';
import { Redirect } from 'react-router';
import Filter from '../../components/Filter/Filter';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import TenantCard from '../../components/TenantCard/TenantCard';
import HoaAccordion from '../../components/HoaAccordion/HoaAccordion';

function TenantsPage({ activeUser }) {

    const [tenants, setTenants] = useState([]);
    const [filterText, setFilterText] = useState("");

    const tenantsCards = tenants !== undefined ? tenants.map((tenant, index) => <TenantCard key={index.toString()} tenant={tenant}></TenantCard>) : [];
   
    useEffect(() => {
        if (activeUser || activeUser.role == 0) {
            const User = Parse.Object.extend('User');
            const query = new Parse.Query(User);

            const BuildingId = Parse.Object.extend("BuildingId");
            const myBuildingId = new BuildingId();
            myBuildingId.id = activeUser.buildingId.id;
           
            // Just the objectId is enough to compare the object
            query.equalTo("buildingId", myBuildingId);

            query.find().then(results => {
                // console.log(`Users found: ${JSON.stringify(results)}`);
                setTenants(results.map(result => new UserModel(result)));
            });
        }
    }, [])

    if (!activeUser || activeUser.role != 0) {
        return <Redirect to="/" />
    }

    function handleFilterTestChange(text) {
        setFilterText(text);    
    }

    function filter() {
        return filterText && filterText !== "" ? tenantsCards.filter((card) => card.props.tenant.name.toLowerCase().includes(filterText.toLowerCase()) || 
        card.props.tenant.email.toLowerCase().includes(filterText.toLowerCase()) || 
        (card.props.tenant.apartement+ '').includes(filterText)) : tenantsCards;
    }

    function newTenant() {
        console.log("Should add new tenant");
    }

    return (
        <Container className="p-tenants">
            {/* <img  className="p-tenants-img" src={image}></img> */}
            <Filter
                icon={<i className="bi bi-funnel-fill"></i>}
                // <i className="bi bi-funnel-fill"></i><i className="bi bi-search"></i>
                placeholder="Filter tenants by name or email or apartement..."
                filterText={filterText}
                filterTextChange={handleFilterTestChange}
            />
            <div className="new-tenant">
                <Button variant="link" onClick={newTenant}><i className="bi bi-plus-circle-fill" style={{color: 'lightskyblue'}}></i> Add New Tenant</Button>
            </div>
            <HoaAccordion cards={filter()}></HoaAccordion>
        </Container>
    );
}

export default TenantsPage;