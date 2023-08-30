import categoryIcon from '../assets/icons/category.svg'
import exportIcon from '../assets/icons/export.svg'
import filterIcon from '../assets/icons/filter.svg'
import plusIcon from '../assets/icons/plus.svg'
import arrowIcon from '../assets/icons/arrow-right-green.svg'
import editIcon from '../assets/icons/edit.svg'
import trashIcon from '../assets/icons/delete.svg'
import configIcon from '../assets/icons/config.svg'
import dashboardIcon from '../assets/icons/dashboard.svg'
import helpIcon from '../assets/icons/help.svg'
import inventoryIcon from '../assets/icons/inventory.svg'
import logoutIcon from '../assets/icons/logout.svg'
import suppliersIcon from '../assets/icons/suppliers.svg'
import usersIcon from '../assets/icons/users.svg'
import arrowrigthIcon from '../assets/icons/arrow-rigth.svg'

const exportIconComponent = (iconPath) => {
  const Icon = () => (
    <div>
      <img src={iconPath} alt='Icon' style={{ width: '24px', height: '24px' }} />
    </div>
  )
  return Icon
}

export const IconCategory = exportIconComponent(categoryIcon)
export const IconExport = exportIconComponent(exportIcon)
export const IconFilter = exportIconComponent(filterIcon)
export const IconPlus = exportIconComponent(plusIcon)
export const IconArrow = exportIconComponent(arrowIcon)
export const IconEdit = exportIconComponent(editIcon)
export const IconTrash = exportIconComponent(trashIcon)
export const Iconconfig = exportIconComponent(configIcon)
export const Icondashboard = exportIconComponent(dashboardIcon)
export const Iconhelp = exportIconComponent(helpIcon)
export const Iconinventory = exportIconComponent(inventoryIcon)
export const Iconlogout = exportIconComponent(logoutIcon)
export const Iconsuppliers = exportIconComponent(suppliersIcon)
export const Iconusers = exportIconComponent(usersIcon)
export const IconArrowRigth = exportIconComponent(arrowrigthIcon)
