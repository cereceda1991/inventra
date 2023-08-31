import { useState } from 'react'
import { dataProducts } from '../../API/dataProducts'
import InventoryTable from '../../components/InventoryTable/InventoryTable'
import Navbar from '../../components/Navbar/Navbar'
import Pagination from '../../components/Pagination/Pagination'
import ProductOptions from '../../components/ProductsOptions/ProductsOptions'
import Sidebar from '../../components/Sidebar/Sidebar'
import { IconCategory, IconExport, IconFilter } from '../../utils/CustomIcons'

import './Inventory.css'
import AddProductForm from '../../components/AddProduct/AddProductForm'

const Inventory = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  const productCount = `10 Productos`

  const currentPage = 3
  const totalPages = 10

  const handleEdit = () => {}

  const handleDelete = () => {}

  const handleIn = () => {}

  const [showAddProductForm, setShowAddProductForm] = useState(false)

  const handleAddProduct = () => {
    setShowAddProductForm(true) // Display the form when the button is clicked
  }

  const handleCancelAddProduct = () => {
    setShowAddProductForm(false) // Hide the form when cancel is clicked
  }

  const options = {
    sortBy: ['producto', 'codigo', 'categoria', 'unidad', 'precio'],
    actions: [
      { icon: <IconFilter className='product__options-icon' />, label: 'Filtrar' },
      { icon: <IconExport className='product__options-icon' />, label: 'Exportar' },
      { icon: <IconCategory className='product__options-icon' />, label: 'Category' }
    ],
    buttons: [
      {
        label: '+ Agregar Producto',
        onClick: handleAddProduct
      }
    ]
  }

  return (
    <section className='container__inventory'>
      <Sidebar />
      <section className='header__navbar'>
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      </section>

      {showAddProductForm ? (
        <AddProductForm handleSave={handleAddProduct} handleCancel={handleCancelAddProduct} />
      ) : (
        <>
          <ProductOptions productCount={productCount} options={options} />
          <InventoryTable
            data={dataProducts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleIn={handleIn}
          />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
    </section>
  )
}

export default Inventory
