import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#66CC99'];

const ProductPieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products?limit=100');
      const json = await res.json();

      // Group by category
      const categoryMap = {};
      json.products.forEach((product) => {
        categoryMap[product.category] = (categoryMap[product.category] || 0) + 1;
      });

      // Format for Recharts
      const formatted = Object.entries(categoryMap).map(([name, value]) => ({
        name,
        value,
      }));

      setData(formatted);
    };

    fetchProducts();
  }, []);

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Product Categories (Pie Chart)
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductPieChart;
