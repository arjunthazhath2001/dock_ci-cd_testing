import { prismaClient } from "db/client";


export default async function Home() {

  const users= await prismaClient.user.findMany();
  return (  
    <div>
        {JSON.stringify(users)}
    </div>
  );
}


// export const revalidate=20
// export const dynamic= 'force-dynamic' //this is to prevent the default STATIC SITE GENERATION OF NEXT JS AND TO MAKE IT A DYNAMIC PAGE INSTEAD OF A STATIC ONE

//in the above scenario we are not talking to the database in the build phase.