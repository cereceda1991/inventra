import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IconFilter, IconExport, IconCategory } from '../../utils/CustomIcons';
import ProductOptions from '../../components/ProductsOptions/ProductsOptions';
import { useDispatch, useSelector } from 'react-redux';

import { deleteProduct, getProducts } from '../../Redux/Product/productActions';
import { setProducts } from '../../Redux/Product/productSlice';

import showDialog from '../../utils/showDialog';
import './Inventory.css';
import ProductTable from '../../components/ProjectTables/ProductTable';
import AddProductForm from '../../components/AddProduct/AddProductForm';

const Inventory = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.products.data);
  const products = productsData ? productsData.products : [];

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const [headers, setHeaders] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    // Determinar qué conjunto de encabezados y claves utilizar según el tamaño de la pantalla
    if (window.innerWidth < 600) {
      setHeaders(['Producto', 'Unidad']);
      setKeys(['description', 'unit']);
    } else {
      setHeaders([
        'Producto',
        'Código',
        'Categoría',
        'Stock',
        'Unidad',
        'Precio',
      ]);
      setKeys(['description', 'SKU', 'category', 'stock', 'unit', 'price']);
    }

    // Obtener la lista de usuarios desde el backend al cargar el componente
    dispatch(getProducts());
  }, [dispatch]);

  // Define las funciones para las acciones de editar, eliminar e ingresar
  const handleEdit = (item) => {
    setEditedProduct(item);
    displayProductForm();
    // Lógica para editar el usuario
    console.log('Editar usuario:', item);
  };

  const handleDelete = async (item) => {
    const confirmed = await showDialog(
      'Eliminar Producto',
      '¿Estás seguro de que deseas eliminar el producto?',
      'warning',
      '#FE0000',
    );

    if (confirmed) {
      // Llama a la acción deleteProduct con el ID del usuario que deseas eliminar
      const response = await dispatch(deleteProduct(item._id));

      if (response.status === 200) {
        // Actualiza la lista de usuarios en el estado global si la eliminación fue exitosa
        dispatch(setProducts(productsData.products)); // Asume que productsData.products siempre está definido
        console.log('Usuario eliminado con éxito:', item);
      } else {
        console.error('Error al eliminar usuario:', response.data.message);
      }
    }
  };

  const displayProductForm = () => {
    setShowAddProductForm(true); // Display the form when the button is clicked
  };

  const hideProductForm = () => {
    // Hide the form when cancel is clicked
    setShowAddProductForm(false);
    setEditedProduct(null);
  };

  const productCounter = productsData ? productsData.products.length : 0;
  let productCount = `${productCounter} Productos`;

  const optionsTableInventory = {
    sortBy: ['producto', 'codigo', 'categoria', 'stock', 'unidad', 'precio'],
    actions: [
      { icon: <IconFilter />, label: 'Filtrar' },
      { icon: <IconExport />, label: 'Exportar' },
      { icon: <IconCategory />, label: 'Category' },
    ],
    buttons: [
      {
        label: '+ Agregar Producto',
        onClick: displayProductForm,
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
            handleHide={hideProductForm}
            initialProductData={editedProduct}
            isEditing={editedProduct !== null}
          />
        ) : (
          <>
            <ProductOptions
              productCount={productCount}
              options={optionsTableInventory}
            />
            <ProductTable
              data={products}
              datatype="Producto"
              headers={headers}
              keys={keys}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        )}
      </section>
    </section>
  );
};

export default Inventory;
