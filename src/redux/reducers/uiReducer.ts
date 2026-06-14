import type { Vector3Like } from 'three'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { randWithVariation } from '~/utils/random'
import { CAMERA_POSITION } from '~/utils/threejsContants'

// Define a type for the slice state
interface UI {
    darkmode: boolean
    starPositions: [number, number, number][]
    cameraPosition: Vector3Like
}

type InitializeStarPositionsProps = {
    quantity: number
    position: number
}

// Define the initial state using that type
const initialState: UI = {
    darkmode: true,
    starPositions: [],
    cameraPosition: {
        x: CAMERA_POSITION,
        y: CAMERA_POSITION,
        z: CAMERA_POSITION,
    },
}

const darkmodeName = 'darkmode'

export const ui = createSlice({
    name: 'ui',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTheme: (state, action: PayloadAction<string>) => {
            state.darkmode = JSON.parse(action.payload)
            localStorage.setItem(darkmodeName, action.payload)
        },
        getUI: (state) => {
            const darkmodeContainer = localStorage.getItem(darkmodeName)
            if (darkmodeContainer)
                state.darkmode = JSON.parse(darkmodeContainer)
            else localStorage.setItem(darkmodeName, 'true')
        },
        initializeStarPositions: (
            state,
            action: PayloadAction<InitializeStarPositionsProps>
        ) => {
            state.starPositions = Array.from({
                length: action.payload.quantity,
            }).map(() => [
                randWithVariation(
                    action.payload.position * -1,
                    action.payload.position * 2,
                    action.payload.position
                ),
                randWithVariation(
                    action.payload.position * -1,
                    action.payload.position * 2,
                    action.payload.position
                ),
                randWithVariation(
                    action.payload.position * -1,
                    action.payload.position * 2,
                    action.payload.position
                ),
            ])
        },
        updateCameraPositions: (
            state,
            action: PayloadAction<UI['cameraPosition']>
        ) => {
            state.cameraPosition = action.payload
        },
    },
})

export const {
    setTheme,
    getUI,
    initializeStarPositions,
    updateCameraPositions,
} = ui.actions

export default ui.reducer
