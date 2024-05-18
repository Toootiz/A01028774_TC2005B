/*
Gabriel Muñoz Luna
A01028774
Unity api conectio*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class APIConection : MonoBehaviour
{

    [SerializeField] string url;
    [SerializeField] string getEndpoint;

    SimonController controller;

    // Start is called before the first frame update
    void Start()
    {
        //GetData();
        controller = GetComponent<SimonController>();
     }

    public void GetData()
    {
        StartCoroutine(RequestGet(url + getEndpoint));
    }

    IEnumerator RequestGet(string url)
    {
        //prepare the request object
        using (UnityWebRequest www = UnityWebRequest.Get(url)){
            //make the request and wait for it to respond
            yield return www.SendWebRequest();

            if (www.result != UnityWebRequest.Result.Success){
                Debug.Log("Request failed: " + www.error);
            }
            else{
                string result = www.downloadHandler.text;
                Debug.Log("The response was: " + result);
                // start the process to to create the simon buttons
                controller.apiData = result;
                controller.PrepareButtons();
            }
        }
    }

}
