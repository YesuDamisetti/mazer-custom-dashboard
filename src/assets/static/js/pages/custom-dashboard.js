document.addEventListener("DOMContentLoaded", () => {
  // MOCK DATA (acts like API response)
  const data = {
    users: 1234,
    orders: 87,
    revenue: 56000,
    recentOrders: [
      { id: 1, customer: "Yesu", amount: 1200 },
      { id: 2, customer: "Purna", amount: 3400 },
      { id: 3, customer: "Dheeraj", amount: 2100 }
    ]
  };

  // SUMMARY CARDS
  document.getElementById("usersCount").textContent = data.users;
  document.getElementById("ordersCount").textContent = data.orders;
  document.getElementById("revenueCount").textContent = data.revenue;

  // TABLE
  const table = document.getElementById("ordersTable");
  table.innerHTML = "";

  data.recentOrders.forEach(o => {
    table.innerHTML += `
      <tr>
        <td>${o.id}</td>
        <td>${o.customer}</td>
        <td>₹ ${o.amount}</td>
      </tr>
    `;
  });
});
