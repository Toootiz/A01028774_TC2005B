/*
Game manager for the pongh demo 

Gabriel Muñoz Luna A01028774
2024-04-10
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    public int pointsLeft = 0;
    public int pointsRight = 0;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            if (Input.GetKeyDown(KeyCode.R) && ball != null){
                Destroy(ball);
                InitGame();
            }
        }
    }
    
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;
    }

    public void Score(string side){
        if (side == "left"){
            pointsLeft++;
            InitGame();
        }else if (side == "right") {
            pointsRight++;
            InitGame();
        }
    }
}