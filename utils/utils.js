export const selectMultiple = (option, allOptions, onToggle = () => {}) => {
    let result;
    if (allOptions.find(t => t === option)) {
        result = allOptions.filter(i => i !== option);
    } else {
        result = [...allOptions, option];
    }
    onToggle(result);
};
