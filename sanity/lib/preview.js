"use client"


import {definePreview} from "next-sanity/preview"

import { dataset, projectId } from '../env'

function onPublicAcesssOnly(params) {


    throw new Error('unable to access preview')
    
}

if(!projectId || !dataset){
    throw new Error('missing projectid or dataset')
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAcesssOnly
})