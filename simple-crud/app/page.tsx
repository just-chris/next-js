import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {

  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="Enter item..." />
        <Button>Submit</Button>
      </div>

    <ul>
      <li>this is 1 message</li>
      <li>this is 2 message</li>
      <li>this is 3 message</li>
    </ul>

    </main>
  );
}
export default Home;