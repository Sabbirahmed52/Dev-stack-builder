Technology Stack Builder is a React project where users can explore different technologies and build their own technology stack.Users can select technologies from the available cards and add them to Your Stack. They can also remove technologies from their stack.

Technologies Used:
React
TypeScript
Tailwind CSS
DaisyUI
React Toastify
Vite
Features

1.Users can see information like name, description, category, difficulty, rating, and icon.

2.Users can add technologies to their personal stack by clicking Add to Stack.

3.Users can remove a technology . After removing it, the Add to Stack button becomes available again.



Question answer part:


1. JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.It makes React components easier to write and understand.


2. Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

For example, in this project, tech is passed to TechCard as a prop, while selectedTech is managed as state.

3. useState allows a React component to store and update data.

I used it in the Tech component to store the technologies selected by the user:

const [selectedTech, setSelectedTech] = useState<Etech[]>([]);


4. useEffect is used to perform actions after a component renders.I used it to fetch the technology data from the JSON file when the component loads.It helps load the data without repeatedly fetching it on every render.

5. React uses the key to identify each item in a list.It helps React understand which item was changed.



