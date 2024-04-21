import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface Recipe {
  id: string,
  title: string,
  img: string,
  time: string,
  description: string,
  vegan: string,
  ingredients: string,
  instructions: string
}

const getRecipes = async (): Promise<Recipe[]> => {
  const result = await fetch('http://localhost:3000/recipes');
  console.log(result)
  return result.json()
}

export default async function Home() {

  const recipes = await getRecipes()
  
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          

          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className='flex-row gap-4 items-center'>
              <div className="">
              <CardTitle>{recipe.title}</CardTitle>
              {/* Avatar */}
              <Avatar>
                <AvatarImage src={`/img/${recipe.img}`} alt="recipe image"/>
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                  {/* {recipe.img} */}
                </AvatarFallback>
              </Avatar>
              </div>
              <CardDescription>{recipe.time} mins to cook.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe {recipe.img} </button>
              {recipe.vegan && <p>Vegan!</p>}
            </CardFooter>
          </Card>

          ))}
      </div>
    </main>
  );
}
