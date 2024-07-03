'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            'hedgingtime_details',
            [
                {
                    id: '5104c9d9-abe1-4a2c-9d4b-a37e5282eb1c',
                    instrument_key: 'NSE_INDEX|NIFTY MID SELECT',
                    index_name: 'MIDCPNIFTY',
                    day: 'MONDAY',
                    premium_start: 10,
                    premium_end: 15,
                    market_premium: 78,
                    required_margin: 60000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '4c475a49-35bf-4e8b-b1b0-76e875c0a3ab',
                    instrument_key: 'NSE_INDEX|NIFTY MID SELECT',
                    index_name: 'MIDCPNIFTY',
                    day: 'TUESDAY',
                    premium_start: 25,
                    premium_end: 30,
                    required_margin: 75000,
                    market_premium: 280,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '3a02b1d0-7e3f-4e84-a031-f666af1795f1',
                    instrument_key: 'NSE_INDEX|NIFTY MID SELECT',
                    index_name: 'MIDCPNIFTY',
                    day: 'WEDNESDAY',
                    premium_start: 20,
                    premium_end: 25,
                    required_margin: 70000,
                    market_premium: 230,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '0f1ce3dc-d5ef-4d47-b35e-3f6d99f3e1c3',
                    instrument_key: 'NSE_INDEX|NIFTY MID SELECT',
                    index_name: 'MIDCPNIFTY',
                    day: 'THURSDAY',
                    premium_start: 15,
                    premium_end: 20,
                    required_margin: 65000,
                    market_premium: 190,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'e357f319-5faa-4679-856e-bee0a86ae68c',
                    instrument_key: 'NSE_INDEX|NIFTY MID SELECT',
                    index_name: 'MIDCPNIFTY',
                    day: 'FRIDAY',
                    premium_start: 10,
                    premium_end: 15,
                    required_margin: 60000,
                    market_premium: 145,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'fdcc6a0a-b5a5-435c-877a-a17303c394d2',
                    instrument_key: 'NSE_INDEX|Nifty Fin Service',
                    index_name: 'FINNIFTY',
                    day: 'MONDAY',
                    premium_start: 25,
                    premium_end: '30',
                    market_premium: 215,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'fa9d0367-7844-47dc-88aa-7329a4f7454b',
                    instrument_key: 'NSE_INDEX|Nifty Fin Service',
                    index_name: 'FINNIFTY',
                    day: 'TUESDAY',
                    premium_start: 20,
                    premium_end: '25',
                    market_premium: 125,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'd70e36a0-6d74-4640-a6ec-1b8c5166189c',
                    instrument_key: 'NSE_INDEX|Nifty Fin Service',
                    index_name: 'FINNIFTY',
                    day: 'WEDNESDAY',
                    premium_start: 40,
                    premium_end: '45',
                    market_premium: 390,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'a8b0f68c-3c3d-4ad0-abf3-cc27bc681b5d',
                    instrument_key: 'NSE_INDEX|Nifty Fin Service',
                    index_name: 'FINNIFTY',
                    day: 'THURSDAY',
                    premium_start: 35,
                    premium_end: '40',
                    market_premium: 350,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '773523a2-3177-420e-9e48-4ae6a2e9b746',
                    instrument_key: 'NSE_INDEX|Nifty Fin Service',
                    index_name: 'FINNIFTY',
                    day: 'FRIDAY',
                    premium_start: 30,
                    premium_end: '35',
                    market_premium: 280,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '0cc0c28c-a1a6-427b-a129-44c9c9d11c21',
                    instrument_key: 'NSE_INDEX|Nifty Bank',
                    index_name: 'BANKNIFTY',
                    day: 'MONDAY',
                    premium_start: 60,
                    premium_end: '70',
                    market_premium: 750,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '23c987bf-7491-43af-8048-c04f1a68d744',
                    instrument_key: 'NSE_INDEX|Nifty Bank',
                    index_name: 'BANKNIFTY',
                    day: 'TUESDAY',
                    premium_start: 50,
                    premium_end: '60',
                    market_premium: 585,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'f2bb0337-c0a4-4299-8c6a-983082003729',
                    instrument_key: 'NSE_INDEX|Nifty Bank',
                    index_name: 'BANKNIFTY',
                    day: 'WEDNESDAY',
                    premium_start: 40,
                    premium_end: '50',
                    market_premium: 375,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '1796cb6f-c07e-4607-85d0-4ae0a5b0994d',
                    instrument_key: 'NSE_INDEX|Nifty Bank',
                    index_name: 'BANKNIFTY',
                    day: 'THURSDAY',
                    premium_start: 80,
                    premium_end: '90',
                    market_premium: 1000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'c8e21fab-7d96-455c-8c5a-99393ecb15f1',
                    instrument_key: 'NSE_INDEX|Nifty Bank',
                    index_name: 'BANKNIFTY',
                    day: 'FRIDAY',
                    premium_start: 70,
                    premium_end: '80',
                    market_premium: 870,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '9111a74c-5ad2-4c33-949f-f91c8a49673b',
                    instrument_key: 'NSE_INDEX|Nifty 50',
                    index_name: 'NIFTY',
                    day: 'MONDAY',
                    premium_start: 35,
                    premium_end: '40',
                    market_premium: 290,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'ee3ac3b5-837d-46b2-81f0-7a66f4cec716',
                    instrument_key: 'NSE_INDEX|Nifty 50',
                    index_name: 'NIFTY',
                    day: 'TUESDAY',
                    premium_start: 30,
                    premium_end: '35',
                    market_premium: 260,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'f72664c8-f406-4715-97c6-34eaf868514a',
                    instrument_key: 'NSE_INDEX|Nifty 50',
                    index_name: 'NIFTY',
                    day: 'WEDNESDAY',
                    premium_start: 25,
                    premium_end: '30',
                    market_premium: 210,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: '0f72cf2c-229b-4677-a829-0533616d792f',
                    instrument_key: 'NSE_INDEX|Nifty 50',
                    index_name: 'NIFTY',
                    day: 'THURSDAY',
                    premium_start: 20,
                    premium_end: '25',
                    market_premium: 140,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
                {
                    id: 'c4e2bbf9-81c4-49ad-8848-cb19db49c130',
                    instrument_key: 'NSE_INDEX|Nifty 50',
                    index_name: 'NIFTY',
                    day: 'FRIDAY',
                    premium_start: 40,
                    premium_end: '45',
                    market_premium: 340,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete(
            'hedgingtime_details',
            { username: 'admin5989' },
            {},
        );
    },
};
