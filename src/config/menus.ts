// Chef-curated menu formats. These describe the *style* of experience, not fixed
// dishes or prices — final menus are always built around each client's preferences.

export type MenuFormat = {
  id: string;
  title: string;
  description: string;
  courses: string;
};

export const MENU_FORMATS: MenuFormat[] = [
  {
    id: "three-course",
    title: "Three Course",
    description: "A refined introduction to the Maddy Cooks experience.",
    courses: "Starter · Main · Dessert",
  },
  {
    id: "four-course",
    title: "Four Course",
    description: "A more complete dining journey.",
    courses: "Starter · Second · Main · Dessert",
  },
  {
    id: "five-course",
    title: "Five Course",
    description: "A multi-course experience designed for guests who want a longer culinary experience.",
    courses: "Five courses, paced across the meal",
  },
  {
    id: "chefs-tasting",
    title: "Chef's Tasting",
    description: "A bespoke menu curated by Chef Maddy.",
    courses: "Course count set by Chef Maddy",
  },
];

export const MENU_DISCLAIMER =
  "Menus shown are examples of Chef Maddy's culinary style. Final menus are created based on your preferences, dietary requirements, ingredient availability and seasonality.";
