import random

def score_tracker(func):
    score = 0
    def wrapper(*args, **kwargs):
        nonlocal score
        result = func(*args, **kwargs)
        if result:
            score += 10
        print(f"Current score: {score}")
        return result
    return wrapper


@score_tracker
def guess_number(player_guess):
    correct_number = random.randint(1, 10)
    if player_guess == correct_number:
        print(f"Correct! The number was {correct_number}")
        return True
    else:
        print(f"Wrong! The number was {correct_number}")
        return False

# Testing the program
for _ in range(3):
    player_guess = int(input("enter number: "))
    guess_number(player_guess)

print("We are done Testing three times")

#Run 100 times
for _ in range(100):
    guess = random.randint(1, 10) 
    guess_number(guess)
