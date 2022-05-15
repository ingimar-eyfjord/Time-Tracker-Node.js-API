const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/*']


// swaggerAutogen(outputFile, endpointsFiles).then(() => {
//     require('./index.js')
// })

const doc = {
    info: {
        version: "1.0.0",
        title: "Dialogue Time API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    contact: {
        name: "Ingimar Eyfjord Smarason",
        url: "https://dialogueone.com",
        email: "ies@dialogueone.com",
    },
    host: "https://api.dialogueone.com",
    basePath: "/api/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Authorize",
            "description": "Endpoints for exchanging MS graph Bearer token, retrieved from Single Sign On, for JWT token for use in each API endpoint."
        },
        {
            "name": "Emply intergration",
            "description": "Endpoints for Emply Api's intergration"
        },
        {
            "name": "Hours",
            "description": "Endpoints for hours records."
        },
        {
            "name": "Schedule",
            "description": "Endpoints for schedule records"
        },
        {
            "name": "Salary",
            "description": "Endpoints for salary periods"
        },
        {
            "name": "Ledger",
            "description": "Endpoints for ledger records"
        },
        {
            "name": "Photos",
            "description": "Endpoints for user profile photo records"
        },
        {
            "name": "Locations",
            "description": "Endpoints for location records"
        },
        {
            "name": "Projects",
            "description": "Endpoints for projects"
        },
        {
            "name": "Tasks",
            "description": "Endpoints for tasks records"
        },
        {
            "name": "Teams",
            "description": "Endpoints for teams records"
        },
        {
            "name": "Supplements",
            "description": "Endpoints for supplements records"
        },
    ],
    definitions: {
        PostHours: {
            $Date: "date",
            $Week_number: "number",
            $Hours: "number",
            $Email: "string",
            $User: "string",
            $Location: "Locations foreign key | string",
            $Project: "Projects foreign key | string",
            $Task: "Tasks foreign key | string",
            $Description: "string",
            $Team: "Teams foreign key | string",
            $Contacts: "number",
            $Meetings: "number",
            $User_UUID: "Microsoft Graph user id | string",
            $Transaction_type: "Transaction_type foreign key | string",
        }
    },
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "x-access-token",
            in: "header"
        },
    },
}
swaggerAutogen(outputFile, endpointsFiles, doc)