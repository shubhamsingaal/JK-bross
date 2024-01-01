import React, { useState } from 'react'
import { Modal } from '../../ui'
import { Tab } from '@headlessui/react'
import { furnitureData as data } from '../../data/items'
import { Minus, Plus } from 'phosphor-react'

const itemType =  ['Furniture', 'Appliances', 'Cartons']

const SelectItemsModal = ({ open, setOpen }) => {
    
    const [furnitureData, setFurnitureData] = useState(data); // Use state to trigger re-renders
    const [ selectedIndex, setSelectedIndex ] = useState(itemType[0]) // Tab group main @itemType
    const sectionNames = Object.keys(furnitureData);
    const [ selectedSubGroup, setSelectedSubGroup ] = useState(sectionNames[0])

    
    const [itemCounts, setItemCounts] = useState({});

    // State to store total count for each item type
    const [totalCounts, setTotalCounts] = useState({});

    const addItem = (item) => {
        setFurnitureData((prevData) => ({
            ...prevData,
            [selectedSubGroup]: {
                ...prevData[selectedSubGroup],
                items: prevData[selectedSubGroup].items.map((i) =>
                    i === item ? { ...i, count: i.count + 1 } : i
                ),
            },
        }));

        // Update individual item count
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [item]: (prevCounts[item] || 0) + 1,
        }));

        // Update total count for the item type
        setTotalCounts((prevCounts) => ({
            ...prevCounts,
            [selectedSubGroup]: (prevCounts[selectedSubGroup] || 0) + 1,
        }));
    };

    const removeItem = (item) => {
        setFurnitureData((prevData) => ({
            ...prevData,
            [selectedSubGroup]: {
                ...prevData[selectedSubGroup],
                items: prevData[selectedSubGroup].items.map((i) =>
                    i === item ? { ...i, count: i.count > 0 ? i.count - 1 : 0 } : i
                ),
            },
        }));

        // Update individual item count
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [item]: Math.max((prevCounts[item] || 0) - 1, 0),
        }));

        // Update total count for the item type
        setTotalCounts((prevCounts) => ({
            ...prevCounts,
            [selectedSubGroup]: Math.max((prevCounts[selectedSubGroup] || 0) - 1, 0),
        }));
    };


  return (
    <Modal 
        title="Select items"
        open={open}
        setOpen={setOpen}
        onCloseClick={() => setOpen(false)}
        closeText={"Close"}
    >   
        <div className='pl-[1rem]'>
            <Tab.Group vertical 
                selectedIndex={itemType.indexOf(selectedIndex)} 
                onChange={(index) => setSelectedIndex(itemType[index])}
                >
                <Tab.List>
                    {itemType.map((tab, index) => (
                        <Tab key={index} 
                            className={({ selected }) => 
                                `outline-none 
                                ${selected 
                                    ? 'border-b-2 border-primary text-primary' 
                                    : 'text-gray-400'}`}>

                            <div className='flex items-center gap-[0.5rem] mr-4'>
                                <p className='ml-2 my-2'>{tab}</p>
                                <div className='
                                    bg-primary w-[1rem] h-[1rem] p-1 rounded-full min-w-max flex items-center
                                '>
                                    <p className='text-xs text-white'>{totalCounts[selectedSubGroup] > 0 ? totalCounts[selectedSubGroup] : 0}</p>
                                </div>
                            </div>      

                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>

                    <Tab.Panel className="furniture-tab">
                        <div className='flex'>
                            <div className=''>
                                {    
                                    <div className='flex flex-row relative'>
                                        <Tab.Group 
                                            vertical={false}
                                            selectedIndex={sectionNames.indexOf(selectedSubGroup)} 
                                            onChange={(index) => setSelectedSubGroup(sectionNames[index])}
                                            >
                                            <Tab.List className="flex flex-col pr-2 gap-y-2 mt-4">
                                                {
                                                    sectionNames.map((item, index) => {
                                                        return(
                                                            <Tab 
                                                                key={index}
                                                                className={({ selected }) => 
                                                                `outline-none text-left px-2 py-1 text-sm rounded-3xl
                                                                ${selected 
                                                                    ? 'text-white bg-primary rounded' 
                                                                    : 'text-gray-400'}`}
                                                                >
                                                                    {item}
                                                            </Tab>
                                                        )
                                                    })
                                                }
                                            </Tab.List>
                                            <div className='
                                                    flex flex-col h-[60svh] md:h-[70svh]
                                                    md:w-[40rem] bg-secondary border-b-2
                                                    overflow-y-auto scrollbar-style 
                                                    border-x-2 border-t-2 border-outline flex-1
                                                    relative
                                                    '>
                                                {
                                                    furnitureData[selectedSubGroup].items.map((item, index) => {
                                                        return(
                                                            <div key={index} 
                                                                className={`
                                                                    flex gap-x-2 
                                                                    justify-between 
                                                                    w-[100%] 
                                                                    border-b-2 border-outline
                                                                    bg-secondary pt-[1rem] py-[0.5rem] px-4`}>
                                                                <h1 className='text-xs'>
                                                                    {item.item}
                                                                </h1>

                                                                <div className='text-xs flex items-center justify-center border-2 border-outline rounded-3xl'>
                                                                    <button className='hover:bg-outline rounded-l-3xl p-1'
                                                                        onClick={() => removeItem(item)}
                                                                        disabled={item.count === 0}
                                                                        >
                                                                        <Minus size={16}/>
                                                                    </button>
                                                                        <div className='border-x-2 boder-rounded px-2 border-outline text-xs bg-white'>
                                                                            {item.count}
                                                                        </div>
                                                                    <button className='hover:bg-primary bg-outline rounded-r-3xl p-1 hover:text-white'
                                                                            onClick={() => addItem(item)}
                                                                        >
                                                                        <Plus size={16}/>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        <div className='absolute bottom-0  bg-outline w-[100%] px-4 py-1 md:text-sm text-xs
                                                flex justify-between
                                        '>
                                            <h1 className='text-primary'>
                                                {totalCounts[selectedSubGroup] > 0 && totalCounts[selectedSubGroup]} items selected
                                            </h1>
                                            <button className='text-primary'>
                                                Clear all
                                            </button>
                                        </div>
                                        </Tab.Group>
                                    </div>
                                }
                            </div>
                        </div>
                    </Tab.Panel> 

                    <Tab.Panel className="Appliaccation-tab">
                              Appliances
                    </Tab.Panel>
                    <Tab.Panel>Cartons</Tab.Panel>


                </Tab.Panels>
            </Tab.Group>
        </div>
    </Modal>
  )
}

export default SelectItemsModal