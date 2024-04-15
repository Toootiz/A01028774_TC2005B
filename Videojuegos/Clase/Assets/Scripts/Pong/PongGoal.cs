/*
Detect whwn the ball goes out of boubds

Gabriel Muñoz Luna 
2024-04-10
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{

    [SerializeField] string side;

    // Variable  to reference another script
    PongManager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<PongManager>();
    }

    // Detect when the ball goes out of bounnds
    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
    }
}