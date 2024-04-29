using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonControllers : MonoBehaviour
{
    [SerializeField] List <SimonButtons> buttons;
    [SerializeField] List <int> sequence;

    [SerializeField] float delay;

    [SerializeField] bool playerTurn = false;

    [SerializeField] int level = 0;

    [SerializeField] int counter = 0;


    // Start is called before the first frame update
    void Start()
    {
        // Configure the buttons to be used in the game
        PrepareButtons();        
    }

    // Update is called once per frame
    void Update()
    {
 
    }

    void PrepareButtons()
    {
        for (int i = 0; i < buttons.Count; i++)
        {
            index = i;
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        }

        //start the game by adding the first button
        AddToSequence();
    }

    public void ButtonPressed(int index)
    {
        if (playerTurn) {
            if (index != sequence[counter++]){
                if (counter == sequence.Count){
                    level++;
                    counter = 0;
                    playerTurn = false;
                    AddToSequence();
                } 
            } else{
                Debug.log("You lose");
            }
        }
            
    }
    
    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(playerSequence());
    }



    IEnumerator PlaySequence()
    {
        foreach(int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);

        }

        playerTurn = true;
    }


}

