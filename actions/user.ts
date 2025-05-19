'use server'

import { getUserByEmail } from "../data/user";
import { prisma } from "../prisma/prisma"


export const checkUsernameExists = async (username: string) => {

    try {
        const usernameExists = await prisma.user.findFirst({
          where: {
            username: username,
          }
        })
        console.log(usernameExists);
        if(usernameExists != null)
        {
            console.log('Username Not Available')
            return { error: "Username Not Available"}
        }
        else {
            console.log('Username Available')
            return { success: "Username Available"}
        }
      } catch (error) {
        console.log(error)
        return { error: error }
      }

    return;
}

export const checkAddressExists = async (address: string) => {

  try {
      const addressExists = await prisma.user.findFirst({
        where: {
          address: address,
        }
      })
      console.log(addressExists);
      if(addressExists != null)
      {
          console.log('Address Not Available')
          return false
      }
      else {
          console.log('Address Available')
          return true
      }
    } catch (error) {
      console.log(error)
      return { error: error }
    }

  return;
}

interface onboardPayload  {
  username: string,
  email: string,
  address: string,
  accountAddress: string,
}

export const onboardUser = async (onboardPayload: onboardPayload) => {

  console.log('Onboardiung ')
  try {
    const existingUser = await getUserByEmail(onboardPayload.email)

    if(!existingUser) {
        return { error: "User not found" }
    }   
    
    const usernameExists = await prisma.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        username: onboardPayload.username,
        address: onboardPayload.address,
        accountAddress: onboardPayload.accountAddress,
      },
    })
    console.log('Update:', usernameExists);

    return { success: 'Username Updated'};
    
  } catch (error) {
    console.log("Error:" , error)
    return { error: error }
  }

}

export const updateUsername = async (username: string, email: string) => {

    try {

        const existingUser = await getUserByEmail(email)


        if(!existingUser) {
            return { error: "User not found" }
        }   
        
        const usernameExists = await prisma.user.update({
          where: {
            id: existingUser.id,
          },
          data: {
            username: username,
          },
        })
        console.log('Update:', usernameExists);

        return { success: 'Username Updated'};
        
      } catch (error) {
        console.log("Error:" , error)
        return { error: error }
      }

}
