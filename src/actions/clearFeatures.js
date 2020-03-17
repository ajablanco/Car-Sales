const clearFeatures = item => {
    return {
        type: 'CLEAR_FEATURES',
        payload: item
    }
}

export default clearFeatures;