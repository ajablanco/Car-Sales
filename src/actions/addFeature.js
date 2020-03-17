

// action creator
export const addFeature = item => {
    //create and return action object
    return {
        type: 'ADD_FEATURE',
        payload: item
    };
}

