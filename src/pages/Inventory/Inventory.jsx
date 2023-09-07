import { useEffect, useState } from 'react';
import { dataProducts } from '../../API/dataProducts';
import Navbar from '../../components/Navbar/Navbar';
import Pagination from '../../components/Pagination/Pagination';
import ProductOptions from '../../components/ProductsOptions/ProductsOptions';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IconCategory, IconExport, IconFilter } from '../../utils/CustomIcons';

import './Inventory.css';
import AddProductForm from '../../components/AddProduct/AddProductForm';
import ProductTable from '../../components/ProjectTables/ProductTable';

const Inventory = () => {
  const productCount = `10 Productos`;

  const currentPage = 3;
  const totalPages = 10;

  const [headers, setHeaders] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    // Determinar qué conjunto de encabezados y claves utilizar según el tamaño de la pantalla
    if (window.innerWidth < 600) {
      setHeaders(['Producto', 'Unidad']);
      setKeys(['entity', 'unit']);
    } else {
      setHeaders(['Producto', 'Código', 'Categoría', 'Unidad', 'Precio']);
      setKeys(['entity', 'code', 'category', 'unit', 'price']);
    }
  }, []);

  // Define las funciones para las acciones de editar, eliminar e ingresar
  const handleEdit = (item) => {
    // Lógica para editar el producto
    console.log('Editar producto:', item);
  };

  const handleDelete = (item) => {
    // Lógica para eliminar el producto
    console.log('Eliminar producto:', item);
  };

  const handleViewDetails = (item) => {
    // Lógica para ingresar el producto
    console.log('Ingresar producto:', item);
  };

  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProduct = () => {
    setShowAddProductForm(true); // Display the form when the button is clicked
  };

  const handleCancelAddProduct = () => {
    setShowAddProductForm(false); // Hide the form when cancel is clicked
  };

  const optionsTableInventory = {
    sortBy: ['producto', 'codigo', 'categoria', 'unidad', 'precio'],
    actions: [
      { icon: <IconFilter />, label: 'Filtrar' },
      { icon: <IconExport />, label: 'Exportar' },
      { icon: <IconCategory />, label: 'Category' },
    ],
    buttons: [
      {
        label: '+ Agregar Producto',
        onClick: handleAddProduct,
      },
    ],
  };

  return (
    <section className="container__dashboard">
      <Sidebar />
      <Navbar />
      <section className="container__inventory-main">
        {showAddProductForm ? (
          <AddProductForm
            handleSave={handleAddProduct}
            handleCancel={handleCancelAddProduct}
          />
        ) : (
          <>
            <ProductOptions
              productCount={productCount}
              options={optionsTableInventory}
            />
            <ProductTable
              data={dataProducts}
              datatype="Producto"
              headers={headers}
              keys={keys}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewDetails={handleViewDetails}
            />

            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </>
        )}
      </section>
    </section>
  );
};

export default Inventory;
