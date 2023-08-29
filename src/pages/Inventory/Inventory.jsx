import InventoryTable from '../../components/InventoryTable/InventoryTable'
import Navbar from '../../components/Navbar/Navbar'
import Pagination from '../../components/Pagination/Pagination'
import ProductOptions from '../../components/ProductsOptions/ProductsOptions'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Inventory.css'

const Inventory = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  const productCount = 10
  const data = [
    {
      foto: 'https://i.ibb.co/hZmw98D/aceite.png',
      descripcion: 'Papel H doble hoja Elite',
      codigo: '001',
      unidad: 1,
      categoria: 'Limpieza',
      precio: '$10.00'
    },
    {
      foto: 'https://i.ibb.co/drXfcRn/gillete.png',
      descripcion: 'Prestobarba Gillete',
      codigo: '002',
      unidad: 2,
      categoria: 'Categoría 2',
      precio: '$15.00'
    },
    {
      foto: 'https://i.ibb.co/G0JpPfP/arroz.png',
      descripcion: 'Descripción del producto 3',
      codigo: '003',
      unidad: 3,
      categoria: 'Categoría 3',
      precio: '$20.00'
    },
    {
      foto: 'https://i.ibb.co/jHXLQYk/jabon.png',
      descripcion: 'Descripción del producto 4',
      codigo: '004',
      unidad: 4,
      categoria: 'Categoría 4',
      precio: '$25.00'
    },
    {
      foto: 'https://i.ibb.co/J7NKx6Y/papel.png',
      descripcion: 'Descripción del producto 5',
      codigo: '005',
      unidad: 5,
      categoria: 'Categoría 5',
      precio: '$30.00'
    },
    {
      foto: 'https://i.ibb.co/Nm6tgLr/papel2.png',
      descripcion: 'Descripción del producto 6',
      codigo: '006',
      unidad: 6,
      categoria: 'Categoría 6',
      precio: '$35.00'
    }
  ]

  const currentPage = 3
  const totalPages = 10

  const handleEdit = () => {}

  const handleDelete = () => {}

  const handleIn = () => {}

  return (
    <section className='container__inventory'>
      <Sidebar />
      <section className='header__navbar'>
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      </section>
      <ProductOptions productCount={productCount} />
      <InventoryTable
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleIn={handleIn}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  )
}

export default Inventory
