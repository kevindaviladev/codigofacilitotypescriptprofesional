const sayHi = (name) => {
  console.log(`Hola ${name} `);
};

sayHi("estudiantes de Código Facilito");

function sayGoodbye(name) {
  console.log(`Adiós ${name}, casi terminamos el curso`);
}

sayGoodbye("EStudiantes");

interface ResponseServiceCD {
  id: number;
  name: string;
  charge: string;
  number: number;
}

const response: ResponseServiceCD = {
  id: 1,
  name: "Código Facilito!!",
  charge: "Developer",
  number: 4,
};
function show({ name, ...other }: ResponseServiceCD): number {
  console.log("El id mandado es: ", name);
  console.log("Otros datos: ", other);

  //   savePerson({ name, ...other });
  return 1;
}

show(response);
