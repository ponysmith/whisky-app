import React, { useState } from 'react'
import Select, {SelectOption} from '@workday/canvas-kit-react-select';
import FormField from '@workday/canvas-kit-react-form-field';

import WhiskyImg from './images/whisky.jpg'
import "./page.scss"

export const Page = () => {


  return (
    <div id="page-container">
      <div id="page-content">
        <div id="aside-container">
          <aside id="aside-content">
            <img src={WhiskyImg} alt="Glass of whisky" width="100%" />
            <form className="whisky-form">
              <FormField label="Select a Whisky" inputId="whisky-select">
                <Select name="whisky">
                  <SelectOption value="whisky1" label="Whisky 1" />
                  <SelectOption value="whisky2" label="Whisky 2" />
                  <SelectOption value="whisky3" label="Whisky 3" />
                  <SelectOption value="whisky4" label="Whisky 4" />
                </Select>
              </FormField>
            </form>
          </aside>
        </div>
        <div id="main-container">
          <main id="main-content">
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page