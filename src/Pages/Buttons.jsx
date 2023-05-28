import { Button } from '@mantine/core'
import React from 'react'

function Buttons() {
    return (
        <div className='Buttons-div'>
            <h1>Types of Buttons</h1>
            <div className="">
                <Button color="dark">
                    Dark btn
                </Button>
            </div>
            <div className="">
                <Button variant='light'>
                    Variant light
                </Button>
            </div>
            <div className="">
                <Button variant='outline'>
                    Variant outline
                </Button>
            </div>
            <div className="">
                <Button variant='default' color="dark">
                    Variant Default
                </Button>
            </div>
            <div className="">
                <Button variant='subtle'>
                    Variant Subtle
                </Button>
            </div>
            <div className="">
                <Button radius="xl">
                    radius xl
                </Button>
            </div>
            <div className="">
                <Button  disabled>
                    disabled btn
                </Button>
            </div>
            <div className="">
                <Button compact>
                compact btn
                </Button>
            </div>
            <div className="">
                <Button uppercase>
                uppercase btn
                </Button>
            </div>
            <div className="">
                <Button variant="gradient" gradient={{from: 'teal', to: 'lime'}}>Gradient Btn</Button>
            </div>
        </div>
    )
}

export default Buttons