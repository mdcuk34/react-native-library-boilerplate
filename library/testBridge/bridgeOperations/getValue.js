const getValue = bridge => new Promise(resolve => setTimeout(() => resolve('A native response'), 2000));

export default getValue;
