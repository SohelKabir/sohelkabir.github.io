'''

print('A program to show the founder.')
dictionary = {
	'microsoft':'Bill Gates'
	'amazon':'Jeff Bezos'
	'www':'Tim Berners Lee'
	'intel':'Tedd Hoff & Stan Mezor & Mashatoushi Shima'
	'apple':'Steve Jovs'
	'facebook':'Mark Zuckerburg'
}
user = input('Enter a name to see the FOUNDER: ')
user = user.lower()
print(dictionary.get(user , NOTHING FOUND!!!))
'''
'''

print('PRESS 1 to determine a value like 1+2+3...+n')
print('PRESS 2 to determine a value like (1*1)(2*2)(3*3)...*(n*n)')
print('PRESS 3 to determine a value like 1+3+5...+n')
user = input('Input 1,2,3 : ')
if user == 1:
	print('1+2+3...+n')
	n = input('Enter the value of n : ')
	sum = 0
	for x in range(1,n+1,1)
	sum = sum + x
print(sum)	
elif user == 2:
	print('(1*1)(2*2)(3*3)...*(n*n)')
	n = input('Enter the value of n : ')
	sum = 1
	for x in range(1,n+1,1)
	sum = sum * x
print(sum)
elif user == 3:
	print('1+3+5...+n')
	n = input('Enter the value of n : ')
	sum = 0
	for x in range(1,n+1,2)
	sum = sum + x
print(sum)
else:
	print('INVALID INPUT!')
print('Anasur Rahman.')
'''

'''
# a simple program to measure the area of a triangle
base = float(input('Input the base of your triangle\'s : '))
height = float(input('Input the height of your triangle\'s : '))
area = .5 * base * height
print('Area is', area)
'''

# guessing game

from random import randint

print('GUESSEING GAME.')
xy = input('Enter a Number between 1 - 5 :')
randomNumber = randint(1 , 5)
if xy == randomNumber:
	print('YOU WON..YUHH!')
else:
	print('You LOSE!')
print('RANDOM NUMBER WAS' , randomNumber)
print('THANK YOU\nAnasur Rahman')


#PYGAME
'''
import pygame

screen_size = [360 ,600]
screen = pygame.display.set_mode(screen_size)
background = pygame.image.load('')
planet = pygame.image.load('')
planet_a = 140
move_direction = 'right'
spaceship = pygame.image.load('')
bullet = pygame.image.load('')
bullet_b = 500
fired = False

keep_alive = True
while keep_alive:
	pygame.event.get()
	keys = pygame.key.get_pressed()
	if keys[pygame.K_SPACE] == True:
		fired == True

	if move_direction == 'right':
		planet_a = planet_a + 5
		if planet_a == 300:
			move_direction == 'left'
	else:
	planet_a = planet_a - 51p
		if planet_a == 0:
			move_direction = 'right'
	if fired is True:
		bullet_b = bullet_b - 5
	if bullet_b = 50:
		fired = True

