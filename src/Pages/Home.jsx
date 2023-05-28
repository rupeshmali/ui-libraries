import React from 'react'
import { Anchor, Button, Group, Input, Select, Table, Tabs } from '@mantine/core';
import { Link } from 'react-router-dom';
// import { TabsList } from '@mantine/core/lib/Tabs/TabsList/TabsList';

function Home() {

    const elements = [
        { name: 'Button', demo: <Button>Rupesh</Button>, exploreLink: <Link to={'/buttons'} >Explore Buttons</Link> },
        { name: 'Input', demo: <Input placeholder='Enter your name'></Input>, exploreLink: <Link to={'/inputs'} >Explore Inputs</Link> },
        { name: 'Group', demo: <Group><Button variant='outline'>1</Button><Button variant='outline'>2</Button><Button variant='outline'>3</Button></Group>, exploreLink: <Link to={'/buttons'} >Explore Buttons</Link>},
        { name: 'Select', demo: <Select placeholder='Pick one' data={[{ value: 'rupesh', label: 'Rupesh' }, { value: 'anya', label: 'Anya' }]}></Select>, exploreLink: <Link to={'/buttons'} >Explore Buttons</Link> },
        { name: 'Anchor', demo: <Anchor href='https://mantine.dev/' target='_blank'>This is link</Anchor>, exploreLink: <Link to={'/buttons'} >Explore Buttons</Link> },
        {
            name: 'Tabs', demo: <Tabs defaultValue="Home"><Tabs.List>
                <Tabs.Tab value="Home">Home </Tabs.Tab>
                <Tabs.Tab value="About">About us</Tabs.Tab>
            </Tabs.List>
                <Tabs.Panel value="Home" pt="xs">
                    Home content
                </Tabs.Panel>
                <Tabs.Panel value="About" pt="xs">
                    About us content
                </Tabs.Panel>
            </Tabs>, exploreLink: <Link to={'/buttons'} >Explore Buttons</Link>
        }

    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.demo}</td>
            <td>{element.exploreLink}</td>
        </tr>
    ));

    return (
        <div className='home-continer'>
            <Table
                verticalSpacing="xl"
                horizontalSpacing="xl"
                fontSize="xl"
                striped
                withBorder
            >
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Demo Design</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    )
}

export default Home