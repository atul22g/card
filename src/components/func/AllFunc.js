// Find Social Icon
export const findCardInon = (details, isOpen) => {
    for (let i = 0; i < details.length; i++) {
        if (details[i].openModal === 'social' && details[i].socialName === isOpen) {
            return details[i].icon
        } else {}
    }
}