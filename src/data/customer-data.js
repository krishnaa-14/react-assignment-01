export const customer_data = [];

for (let i = 1; i <= 1000; i++) {
  customer_data.push({
    id: i,
    name: `Customer ${i.toString().padStart(4, '0')}`,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    address: `Address ${i.toString().padStart(2, '0')}`
  });
}

export default customer_data;
