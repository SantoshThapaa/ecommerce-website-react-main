const initialData = {
    studentName: 'Binayak'
}

const studentReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                studentName: action.payload
            }
        default:
            return state
    }
}

export default studentReducer