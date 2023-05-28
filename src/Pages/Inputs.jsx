import { Checkbox, FileInput, Group, MultiSelect, NumberInput, PasswordInput, PinInput, Radio, Rating, Slider, Switch, Textarea } from '@mantine/core'
import React from 'react'

function Inputs() {
    return (
        <div className='inputs'>
            <h1>------Types of Inputs------</h1>
            <div className="">
                <Checkbox label="click the checkbox" />
            </div>
            <div className="">
                <FileInput
                    placeholder='This is a file input'
                    label="FILE PICKER"
                    withAsterisk
                />
            </div>
            <div className="">
                <MultiSelect
                    data={[{ value: 'India', label: 'India' }, { value: 'UK', label: 'UK' }, { value: 'Netherlands', label: 'Netherlands' }]}
                    label="MULTISELECT"
                    placeholder='Pick all that you like'
                />
            </div>
            <div className="">
                <NumberInput
                    defaultValue={18}
                    placeholder='Your age'
                    label="Number Input"
                    withAsterisk
                />
            </div>
            <div className="">
                <PasswordInput
                    placeholder='Password'
                    label='Password Input'
                    withAsterisk
                />
            </div>
            <div className="">
                <label htmlFor="">PIN/OTP Input</label>
                <Group>
                    <PinInput length={6} />
                </Group>
            </div>
            <div className="">
                <Radio
                    label="RADIO_BTN - I cannot be unchecked"
                />
            </div>
            <div className="">
                <label htmlFor="">Rating Input</label>
                <Rating defaultValue={1} count={5} />
            </div>
            <div className="">
                <label htmlFor="">Slider Input....................</label>
                <Slider
                    marks={[
                        { value: 20, label: '20%' },
                        { value: 50, label: '50%' },
                        { value: 80, label: '80%' },
                    ]}
                />
            </div>
            <div className="">
                <Switch 
                label="TOGGLE/SWITCH INPUT "
                />
            </div>
            <div className="">
            <Textarea
      placeholder="Your comment"
      label="TextArea"
      size="xs"
      withAsterisk
    />
            </div>
        </div>
    )
}

export default Inputs