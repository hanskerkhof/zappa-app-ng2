/* tslint:disable:no-string-literal */
import {UUID} from 'angular2-uuid';

export interface IAlbum {
    $key?: string;
    name: string;
    year: number;
    owned: boolean;
    uuid: string;
    // createdAt: number;
}

export class Album implements IAlbum {
    owned: boolean = false;
    // createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    name: string;
    year: number;
    uuid: string;

    constructor(name: string, year: number) {
        this.name = name;
        this.year = year;
        this.uuid = UUID.UUID();
    }
}

/* tslint:disable */

export class AlbumData {
    public static ALBUM_DATA =
        {
            "-KaYyG02pGn-ALCBFoaf": {
                "name": "Freak out",
                "owned": true,
                "uuid": "54dbc5ea-c2ac-e023-d39e-9667a22f65f3",
                "year": 1966
            },
            "-KaYyG04CpnDUK4yi4Xm": {
                "name": "Absolutely Free",
                "owned": true,
                "uuid": "87034b44-daf4-6cba-2f25-97338985a79b",
                "year": 1967
            },
            "-KaYyG06Ge5LRwIyjMCz": {
                "name": "Lumpy Gravy",
                "owned": false,
                "uuid": "777eca33-c484-7f88-1d38-018031421603",
                "year": 1967
            },
            "-KaYyG0AMfqjefVABP8q": {
                "name": "We're Only in It for the Money",
                "owned": false,
                "uuid": "e2cd2858-bbe6-7bde-fa68-4819438c4027",
                "year": 1968
            },
            "-KaYyG0CPszaCReJGigf": {
                "name": "Cruising with Ruben & the Jets",
                "owned": true,
                "uuid": "aed43400-2808-48c4-1fd1-79776e47af5f",
                "year": 1968
            },
            "-KaYyG0GTWeENIDKVMes": {
                "name": "Uncle Meat",
                "owned": true,
                "uuid": "8b1dd315-6c49-28d2-973f-7b7dc9d1f6fc",
                "year": 1969
            },
            "-KaYyG0IT8wnZEhHDVAA": {
                "name": "Mothermania",
                "owned": false,
                "uuid": "c495a8d9-9ad9-ba05-eb5e-26d9cc0419be",
                "year": 1969
            },
            "-KaYyG0Kdk5zF41oQMV8": {
                "name": "Hot Rats",
                "owned": true,
                "uuid": "d5b5b5f4-a3ba-0010-c647-c0ab2e83a6df",
                "year": 1969
            },
            "-KaYyG0LJR5UmUaXCozm": {
                "name": "Burnt Weeny Sandwich",
                "owned": false,
                "uuid": "8c5ff925-78f0-2cd6-bcbf-c84ad8b35b05",
                "year": 1970
            },
            "-KaYyG0Nig7bT09bS_Ow": {
                "name": "Weasels Ripped My Flesh",
                "owned": true,
                "uuid": "f6979d66-9f37-cb9d-6269-f58b1248a49a",
                "year": 1970
            },
            "-KaYyG0PPhCGnEnsanBn": {
                "name": "Chunga's Revenge",
                "owned": false,
                "uuid": "926a3c53-b9e3-d658-6a75-a209e9e620c9",
                "year": 1970
            },
            "-KaYyG0Ss3clEtJ9S0E4": {
                "name": "Fillmore East – June 1971",
                "owned": true,
                "uuid": "8c6ae805-7733-826f-8746-6bdfd1969de4",
                "year": 1971
            },
            "-KaYyG0X6WAAKuga0Hkv": {
                "name": "200 Motels",
                "owned": false,
                "uuid": "607ecc88-2703-cbf6-2a2a-a896d179b0e5",
                "year": 1971
            },
            "-KaYyG0_yGs3siK5ToM_": {
                "name": "Just Another Band from L.A.",
                "owned": true,
                "uuid": "29326ae1-7d9a-c4bb-f717-aa7837ab895c",
                "year": 1972
            },
            "-KaYyG0bAa0DFJMoZZJT": {
                "name": "Waka/Jawaka",
                "owned": true,
                "uuid": "9e437cdc-88c6-f23c-bb22-aeeb39a4fafb",
                "year": 1972
            },
            "-KaYyG0clch1gBPQBf7q": {
                "name": "The Grand Wazoo",
                "owned": true,
                "uuid": "d2b9d41c-84f8-f5ea-9fb9-d709915df348",
                "year": 1972
            },
            "-KaYyG0eHbnCY-uy8ny0": {
                "name": "Over-Nite Sensation",
                "owned": false,
                "uuid": "9f994b45-3515-f95f-7b2b-43d38c1e5e71",
                "year": 1973
            },
            "-KaYyG0iiYGMLN0ARu8v": {
                "name": "Apostrophe (')",
                "owned": true,
                "uuid": "523eb597-1cdc-4fed-61e6-8a391454f96d",
                "year": 1974
            },
            "-KaYyG0jrlIXArUaJo7m": {
                "name": "Roxy & Elsewhere",
                "owned": true,
                "uuid": "8f1bd73d-1cfd-72ea-185d-1405924a7374",
                "year": 1974
            },
            "-KaYyG0lgM0bGpP3R5N7": {
                "name": "One Size Fits All",
                "owned": false,
                "uuid": "6bfe5b10-eb8f-eb2f-f4fb-0613a3d4f66d",
                "year": 1975
            },
            "-KaYyG0nBvqQAYNBgd6l": {
                "name": "Bongo Fury",
                "owned": true,
                "uuid": "05de0dd6-78ad-a1c4-6d9c-552714ca4962",
                "year": 1975
            },
            "-KaYyG0pXwnnkLTodFL7": {
                "name": "Zoot Allures",
                "owned": false,
                "uuid": "5ca206d4-f457-6f6c-cb5c-812b00e668bc",
                "year": 1976
            },
            "-KaYyG0qh3dtazZuHYE9": {
                "name": "Zappa in New York",
                "owned": true,
                "uuid": "d7dc5b46-82ae-b738-1f0d-a063673eb490",
                "year": 1978
            },
            "-KaYyG0sJn5lLX4eqYph": {
                "name": "Studio Tan",
                "owned": false,
                "uuid": "c2daffc0-06c3-5b13-3502-3a1e77af5461",
                "year": 1978
            },
            "-KaYyG0umczwe9VpSh6m": {
                "name": "Sleep Dirt",
                "owned": true,
                "uuid": "c66b912d-c01a-546b-7bdf-d48d0221614a",
                "year": 1979
            },
            "-KaYyG0xJUtXahSRSz3n": {
                "name": "Sheik Yerbouti",
                "owned": true,
                "uuid": "949aad0a-d273-493a-18f4-32b378a2ade9",
                "year": 1979
            },
            "-KaYyG1-Nd5CNUKSmL-L": {
                "name": "Orchestral Favorites",
                "owned": false,
                "uuid": "d585976d-245a-cc30-ead2-307b3f10ab5c",
                "year": 1979
            },
            "-KaYyG124KI7X-YEpq61": {
                "name": "Joe's Garage Act I",
                "owned": true,
                "uuid": "e86e4dad-1d37-e190-03e9-34bfb9889148",
                "year": 1979
            },
            "-KaYyG15wBK3_RoJDpPR": {
                "name": "Joe's Garage Acts II & III",
                "owned": true,
                "uuid": "cd9e41a5-c498-6ac1-b6a9-426e0fad7f16",
                "year": 1979
            },
            "-KaYyG16EQN2mIWbGbG3": {
                "name": "Tinsel Town Rebellion",
                "owned": false,
                "uuid": "745de6c9-6da9-5dfc-8ef0-fb0a7e731998",
                "year": 1981
            },
            "-KaYyG18cMsdFDbmxsE2": {
                "name": "Shut Up 'n Play Yer Guitar",
                "owned": false,
                "uuid": "846944f1-4d5a-5eb1-ee14-61ae7e5ffd45",
                "year": 1981
            },
            "-KaYyG1AMgy1pdL_z7dv": {
                "name": "Shut Up 'n Play Yer Guitar Some More",
                "owned": false,
                "uuid": "d014fc33-e0e6-8f05-ab53-c3289de1b2d4",
                "year": 1981
            },
            "-KaYyG1DaNAPmocPCPKd": {
                "name": "Return of the Son of Shut Up 'n Play Yer Guitar",
                "owned": false,
                "uuid": "ee787319-31aa-dba3-8fcf-654f38a991e8",
                "year": 1981
            },
            "-KaYyG1FwIos3iF8IxNL": {
                "name": "You Are What You Is",
                "owned": false,
                "uuid": "cbe9f95f-c1cb-37e9-23df-6bec4636181d",
                "year": 1981
            },
            "-KaYyG1GJReljf5luGld": {
                "name": "Ship Arriving Too Late to Save a Drowning Witch",
                "owned": true,
                "uuid": "072c72dc-fe95-c2af-02ec-3b1676b813f8",
                "year": 1981
            },
            "-KaYyG1HhB4ZVPNmvhL9": {
                "name": "The Man from Utopia",
                "owned": false,
                "uuid": "a6fccc59-2379-957f-6984-7f55d57a1038",
                "year": 1983
            },
            "-KaYyG1KzDhbDSGCmikj": {
                "name": "Baby Snakes",
                "owned": false,
                "uuid": "d0e78e68-01f7-75a2-d726-774f9e5a9543",
                "year": 1983
            },
            "-KaYyG1NJYqXSgWHirWP": {
                "name": "London Symphony Orchestra, Vol. I",
                "owned": false,
                "uuid": "b0ddce98-3e71-f798-d95e-847893f9ea3d",
                "year": 1983
            },
            "-KaYyG1Ozk4mBzUEQqvT": {
                "name": "Boulez Conducts Zappa: The Perfect Stranger",
                "owned": false,
                "uuid": "4cc5d762-57ee-5c57-75f5-e2c033ba3b9f",
                "year": 1984
            },
            "-KaYyG1Rb0dedojvh_m-": {
                "name": "Them or Us",
                "owned": true,
                "uuid": "478522d4-0f24-9f60-8159-1f4355dc6643",
                "year": 1984
            },
            "-KaYyG1UXgB1mDwwZhZm": {
                "name": "Thing-Fish",
                "owned": false,
                "uuid": "d663f1ae-329e-4c56-4180-68a9c69e42c1",
                "year": 1984
            },
            "-KaYyG1WRmTQZ8GmnP0P": {
                "name": "Francesco Zappa",
                "owned": false,
                "uuid": "7011a538-443e-37ad-cb4a-515901ecdbad",
                "year": 1984
            },
            "-KaYyG1YbrHW_F89g0cr": {
                "name": "The Old Masters, Box I",
                "owned": false,
                "uuid": "7cbf87fa-8a67-3ee0-8d23-8666d5cf74a2",
                "year": 1984
            },
            "-KaYyG1ZU2WdhBUhyCzQ": {
                "name": "Frank Zappa Meets the Mothers of Prevention",
                "owned": false,
                "uuid": "65a998f9-1882-f04b-d141-8090e9eb4cf0",
                "year": 1985
            },
            "-KaYyG1_oUOycj4NXlp-": {
                "name": "Does Humor Belong in Music?",
                "owned": false,
                "uuid": "4fd15263-b425-07fe-7a39-edfc59ccc076",
                "year": 1986
            },
            "-KaYyG1byK4GrU_8jVk9": {
                "name": "The Old Masters, Box II",
                "owned": false,
                "uuid": "3e098e00-0879-cbb2-543a-cb015f02d4f3",
                "year": 1986
            },
            "-KaYyG1d1mhHaFiQgoHr": {
                "name": "Jazz from Hell",
                "owned": false,
                "uuid": "46716bbf-998a-4859-19ab-fed8f7836db7",
                "year": 1986
            },
            "-KaYyG1eGM34Q-uxWknd": {
                "name": "London Symphony Orchestra, Vol. II",
                "owned": false,
                "uuid": "475183c8-9534-394e-eac5-32e1a70077d8",
                "year": 1987
            },
            "-KaYyG1gTa1yX-i3Yrs4": {
                "name": "The Old Masters, Box III",
                "owned": false,
                "uuid": "c406f48b-596a-58fb-a3bf-8ce25ddcc338",
                "year": 1987
            },
            "-KaYyG1i_orJrBOM9fCy": {
                "name": "Guitar",
                "owned": false,
                "uuid": "919b7105-13c6-b09e-61c0-ead391f3cfba",
                "year": 1988
            },
            "-KaYyG1kNJphjos37-ge": {
                "name": "You Can't Do That on Stage Anymore, Vol. 1",
                "owned": false,
                "uuid": "88e8bc45-4a7b-f965-b568-46d08358f837",
                "year": 1988
            },
            "-KaYyG1lZ-oP4csUyw7n": {
                "name": "You Can't Do That on Stage Anymore, Vol. 2",
                "owned": false,
                "uuid": "345c1060-8d3a-42b0-2261-b2fcfde18c20",
                "year": 1988
            },
            "-KaYyG1n9vBeaHiIZ6tr": {
                "name": "Broadway the Hard Way",
                "owned": false,
                "uuid": "2cf06eb0-860a-172d-6862-6e53c20f1be1",
                "year": 1988
            },
            "-KaYyG1orvQ2pztsK6vm": {
                "name": "You Can't Do That on Stage Anymore, Vol. 3",
                "owned": false,
                "uuid": "5c415c51-1c18-cafe-14bd-0bf84b371d42",
                "year": 1989
            },
            "-KaYyG1q86dMKBMQuNBR": {
                "name": "The Best Band You Never Heard in Your Life",
                "owned": false,
                "uuid": "6c675081-dcbd-b6b3-b6d9-4f162450bbb3",
                "year": 1991
            },
            "-KaYyG1rFXEZd02xaOgU": {
                "name": "You Can't Do That on Stage Anymore, Vol. 4",
                "owned": false,
                "uuid": "e668990e-fcd7-452a-3af9-7cc3023087ba",
                "year": 1991
            },
            "-KaYyG1tK2pg-YMh4vI8": {
                "name": "Make a Jazz Noise Here",
                "owned": false,
                "uuid": "0aed1c56-ed7f-9e3e-7e64-26a1b5ed2d93",
                "year": 1991
            },
            "-KaYyG1vRodVO1IyywNX": {
                "name": "You Can't Do That on Stage Anymore, Vol. 5",
                "owned": false,
                "uuid": "c3fd1972-7b72-b9a5-3ae4-b62bc36ea652",
                "year": 1992
            },
            "-KaYyG1xxhDCJClmGVWB": {
                "name": "You Can't Do That on Stage Anymore, Vol. 6",
                "owned": false,
                "uuid": "ce696fb4-f954-30cf-0002-462776a49fe1",
                "year": 1992
            },
            "-KaYyG1zLRxnG1dyi7Lb": {
                "name": "Playground Psychotics",
                "owned": false,
                "uuid": "27c79a07-4eb8-a0b7-5cdd-5ed5fca97305",
                "year": 1992
            },
            "-KaYyG2-fP4M-CESAMHg": {
                "name": "Ahead of Their Time",
                "owned": false,
                "uuid": "e85ebee7-7a07-cfd1-cd8a-422c7406f97b",
                "year": 1993
            },
            "-KaYyG21u2N0fTA_E5GH": {
                "name": "The Yellow Shark",
                "owned": false,
                "uuid": "b346c4bd-118a-2c1e-172b-de18b5e4c6e1",
                "year": 1993
            }
        }
}
