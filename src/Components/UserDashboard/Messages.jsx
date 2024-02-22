import React from "react"

export default function Messages(){
    return(
        <div class="bg-gray-100 px-1 py-1">
            <article class="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
                <div class="py-4 sm:py-8">
                <a href="#" class="mb-6 block text-2xl font-medium text-gray-700">Long walks are helpful in decreasing stress levels</a>
                <p class="mb-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum consequatur quia doloremque! Similique eius enim nostrum totam.</p>
                <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full object-cover" src="/images/ddHJYlQqOzyOKm4CSCY8o.png" alt="Simon Lewis" />
                    <p class="ml-4 w-56">
                    <strong class="block font-medium text-gray-700">Johanson Levinsiki</strong>
                    <span class="text-sm text-gray-400">Jun 26, 2022</span>
                    </p>
                </div>
                </div>
            </article>
        </div>

    )
}