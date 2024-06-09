export const convertNameToInitials = (name) => {
    // handle case in which name has no spaces (one letter)
    if (name.indexOf(' ') === -1) {
        return name[0];
    }

    const [firstName, lastName] = name.split(' ');
    return `${firstName[0]}${lastName[0]}`;
}
