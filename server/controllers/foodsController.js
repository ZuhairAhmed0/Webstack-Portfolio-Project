const Foods = require("../models/Foods");

const getAllFoods = async (req, res) => {
  try {
    const foods = await Foods.find({});

    res.json({ foods });
  } catch (error) {
    console.log(error);
  }
};

const addNewFood = async (req, res) => {
  try {

    console.log(req.body)
    const foods = await Foods.create({});

    res.json({
      message: `Successfully add new food`,
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `add new food failed, try again later` });
  }
};

// const menuData = [
//   {
//     category: "lunch",
//     name: "Classic Greek Salad with Shrimp",
//     image: "lunch-01.jpg",
//     description:
//       "Fresh Greek salad with juicy shrimp. A delightful combination of flavors.",
//     price: 13.50,
//   },
//   {
//     category: "lunch",
//     name: "Zucchini Pesto Sausage Pizza with Mozzarella",
//     image: "lunch-02.jpg",
//     description:
//       "Savory sausage pizza topped with zucchini pesto and melted mozzarella.",
//     price: 14.50,
//   },
//   {
//     category: "lunch",
//     name: "Greek-style Grilled Chicken Kabobs",
//     image: "lunch-03.jpg",
//     description:
//       "Tender grilled chicken kabobs with a Greek twist. Served with a flavorful dipping sauce.",
//     price: 15.50,
//   },
//   {
//     category: "lunch",
//     name: "Orchard Harvest Salad with Cherry Balsamic Vinaigrette",
//     image: "lunch-04.jpg",
//     description:
//       "A refreshing salad featuring seasonal fruits and a tangy cherry balsamic vinaigrette.",
//     price: 16.50,
//   },
//   {
//     category: "dinner",
//     name: "Grilled Salmon with Lemon Dill Sauce",
//     image: "dinner-01.jpg",
//     description:
//       "Perfectly grilled salmon fillet drizzled with a zesty lemon dill sauce.",
//     price: 22.00,
//   },
//   {
//     category: "dinner",
//     name: "Filet Mignon with Red Wine Reduction",
//     image: "dinner-02.jpg",
//     description:
//       "Tender filet mignon cooked to perfection and served with a rich red wine reduction.",
//     price: 28.50,
//   },
//   {
//     category: "dinner",
//     name: "Grilled Chicken Alfredo",
//     image: "dinner-03.jpg",
//     description:
//       "Creamy Alfredo sauce over perfectly grilled chicken. Served with pasta.",
//     price: 20.00,
//   },
//   {
//     category: "dinner",
//     name: "Vegetarian Lasagna",
//     image: "dinner-04.jpg",
//     description:
//       "Layers of pasta, rich tomato sauce, and a variety of fresh vegetables.",
//     price: 18.50,
//   },
//   {
//     category: "dessert",
//     name: "Chocolate Lava Cake with Vanilla Ice Cream",
//     image: "dessert-01.jpg",
//     description:
//       "Indulge in a warm chocolate lava cake paired with creamy vanilla ice cream.",
//     price: 10.00,
//   },
//   {
//     category: "dessert",
//     name: "Tiramisu with Espresso Drizzle",
//     image: "dessert-02.jpg",
//     description:
//       "Classic tiramisu with a delightful espresso drizzle for a caffeine kick.",
//     price: 8.50,
//   },
//   {
//     category: "dessert",
//     name: "Cheesecake with Raspberry Swirl",
//     image: "dessert-03.jpg",
//     description: "Classic cheesecake with a delightful raspberry swirl on top.",
//     price: 12.50,
//   },
//   {
//     category: "dessert",
//     name: "Pecan Pie with Whipped Cream",
//     image: "dessert-04.jpg",
//     description:
//       "Homemade pecan pie served with a generous dollop of whipped cream.",
//     price: 9.50,
//   },
//   {
//     category: "drinks",
//     name: "Berry Burst Smoothie",
//     image: "drink-01.jpg",
//     description:
//       "A refreshing smoothie bursting with a medley of berries and natural sweetness.",
//     price: 6.00,
//   },
//   {
//     category: "drinks",
//     name: "Mango Mojito",
//     image: "drink-02.jpg",
//     description:
//       "Cool off with a tropical twist – a refreshing mango mojito with a hint of mint.",
//     price: 7.50,
//   },
//   {
//     category: "drinks",
//     name: "Iced Caramel Macchiato",
//     image: "drink-03.jpg",
//     description:
//       "Chilled espresso mixed with vanilla syrup, milk, and caramel drizzle.",
//     price: 5.50,
//   },
//   {
//     category: "drinks",
//     name: "Matcha Green Tea Latte",
//     image: "drink-04.jpg",
//     description:
//       "Smooth and frothy matcha green tea blended with steamed milk.",
//     price: 6.50,
//   },
// ];

module.exports = {
  getAllFoods,
  addNewFood
};
