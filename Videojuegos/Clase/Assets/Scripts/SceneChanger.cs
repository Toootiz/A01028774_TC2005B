/*
Scrip to change between scenes

Gabriel Muñoz Luna A01028774
2024-04-23
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneChanger : MonoBehaviour
{

    public static void GoTO(string sceneName)
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);
    }
}
