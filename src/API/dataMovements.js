export const generateLabels = (month) => {
    const labels = [];
    const startingDay = 1;
    const daysIncrement = 3;

    for (let i = startingDay; i <= 31; i += daysIncrement) {
        const day = i.toString().padStart(2, '0');
        const label = `${month} ${day}`;
        labels.push(label);
    }

    return labels;
};

// Exportamos los datos
export const labels = generateLabels("Agosto");

export const dataMovementsMonth = {
    label: "Mes Actual",
    data: [ 48, 45, 42, 40, 43, 39, 41, 47, 53, 55, 51],
    borderColor: 'rgba(41, 105, 227, 1)',
    backgroundColor: createGradient('rgba(41, 105, 227, 1)', 'rgba(41, 105, 227, 0)', 'rgba(41, 105, 227, 0)'),
    borderWidth: 3,
    fill: true,
    borderRadius: 10,
};

// Función para crear un gradiente con tres colores
function createGradient(color1, color2, color3) {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(0.8, color2);
    gradient.addColorStop(1, color3);
    return gradient;
}


