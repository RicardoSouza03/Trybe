const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let client = order.name;
  let phone = order.phoneNumber;
  let street = `${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  console.log(
    `Olá ${deliveryPerson},
Entrega para: ${client}, 
Telefone: ${phone}, R. ${street}
`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let name = (order.name = 'Luiz Silva');
  let orderFlavor = Object.keys(order['order']['pizza']);
  let drink = order['order']['drinks']['coke']['type'];
  let total = (order.payment = '50.00');
  let string = `Olá ${name}, o total do seu pedido de ${orderFlavor[0]}, ${orderFlavor[1]} e ${drink} é R$ ${total}.`;
  console.log(string);
};

orderModifier(order);
