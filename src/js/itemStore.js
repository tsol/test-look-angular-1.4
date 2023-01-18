function createitemService() {
  let items = makeDefaultData();
  let selection = { item: null };

  console.log('itemService created');

  const getItems = () => items;

  const addItem = (item) => {
    items.push(item);
  };

  const addItemByTitle = (title) => {
    const item = {
      id: makeDataId(),
      title,
      tags: [],
      date: new Date().toISOString(),
    };
    addItem(item);
  };

  const selectItemById = (id) => {
    selection.item = items.find((item) => item.id === id);
  };

  const selectItem = (item) => {
    selection.id = item.id;
  };

  const isSelected = (item) => {
    return selection.item?.id === item.id;
  };

  const getSelection = () => selection;

  const updateSelectedItem = (newData) => {
    if (!selection.item) return null;
    for (const key in newData) {
      selection.item[key] = newData[key];
    }
    return selection.item;
  };

  return {
    getItems,
    addItem,
    addItemByTitle,
    selectItemById,
    selectItem,
    getSelection,
    isSelected,
    updateSelectedItem,
  };
}
