import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  image: string,
  time: string,
  description: string,
  vegan: string,
  ingredients: string,
  instructions: string
}

const getRecipes = async (): Promise<Recipe[]> => {
  const result = await fetch('http://localhost:3000/recipes');
  // console.log(result)
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
              {/* Avatar */}
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt="recipe image"/>
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                  {/* {recipe.image} */}
                </AvatarFallback>
              </Avatar>
            <div>
              <CardTitle >{recipe.title}</CardTitle>
              <CardDescription>{recipe.time} mins to cook.</CardDescription>
            </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant='secondary'  >View Recipe </Button>
              {recipe.vegan && <Badge>Vegan!</Badge>}
            </CardFooter>
          </Card>

          ))}
      </div>
    </main>
  );
}
