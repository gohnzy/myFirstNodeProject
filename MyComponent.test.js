// /**
//  * @jest-environment jsdom
//  */

import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { getByRole, getByTestId, waitFor, getByLabelText, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent, {handleFormSubmit, init, addListener} from './MyComponent.js';
import '@testing-library/jest-dom'

beforeEach(() => {
    addListener()
});

afterEach(() => {
    document.body.innerHTML = ""; // Réinitialiser le contenu du body après chaque test
});

describe("Age calculation test suites", () => {
    it("Should display no entry message if input is empty", async () => {

        fireEvent.submit(getByRole(document.body, "form")); 

        // Attendre que le résultat soit affiché
        await waitFor(() => {
            expect(getByRole(document.body, "result")).toHaveAttribute("id", "noEntry");
        });
    });

    it("Should display your age message if input is filled with a year between 1901 and 2023", async () => {

        await userEvent.type(
            getByRole(document.body, "input"),
            "1980"
        )

        fireEvent.submit(getByRole(document.body, "form")); 

        // Attendre que le résultat soit affiché
        await waitFor(() => {
            expect(getByRole(document.body, "result")).toHaveAttribute("id", "yourAge");
        });
    });

    it("Should display wrong age message if input is filled with a year older 1901 and more than 2023", async () => {

        await userEvent.type(
            getByRole(document.body, "input"),
            "1800"
        )

        fireEvent.submit(getByRole(document.body, "form")); 

        // Attendre que le résultat soit affiché
        await waitFor(() => {
            expect(getByRole(document.body, "result")).toHaveAttribute("id", "wrongEntry");
        });
    });
});
