import taskItem from '/task-item.svg'
import userStory from '/user-story.svg'

// Simple hash function (djb2)
const hashString = (str) => {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i); // hash * 33 + c
    }
    return hash;
};

// Function to convert a UUID to a consistent hex color
export const uuidToHexColor = (uuid) => {
    // Get the hash of the UUID
    const hash = hashString(uuid);
    // Convert the hash to a hex string
    const hex = ((hash & 0xFFFFFF) >>> 0).toString(16).padStart(6, '0');
    // Return the hex color
    return `#${hex}`;
};

export const generateHexColor = () => {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
};

export const returnWorkItemIcon = (type) => {
    switch (type) {
        case 'Task':
            return taskItem;
        case 'User Story':
            return userStory;
        default:
            return taskItem;
    }
}