---
layout: post
type: blog
title: "Batteries sold separately"
date: 2014-01-25 00:00:00 +0100
category: dev
description: "Hack into Duracell, downloading all the batteries"
tags: [raspberry pi xbmc wiimote battery]
theme: bright
url: batteries-sold-separately
image: "/data/blog/morpheus.jpg"
---
At home, I'm using a Raspberry Pi as media center with XBMC. It's simple, works well, a bit slow, but for a Raspberry it's not too bad (and the release 13 looks pretty good). Since the start, I'm using it with remotes like XBMC clients on iOS, Android or webapp. It's great, but, not brilliant. Because you need many steps before to access to the commands. If you're using your phone, you have to change app, wait the connection then do what you want... too much steps: not ergonomic at all.

The need of a proper remote was there. Unfortunately I couldn't use the remote of my TV via HDMI. My TV is not powerful enough for this kind of things.

For Christmas, I went back home, and something reminded me I had a Wiimote. After few searches, yes! I can use it via Bluetooth to control my Raspbmc. I followed some tutorials, the thing doesn't seems complicated. 20 minutes later, it's working!

Actually, the XBMC distribution is ready to use a Wiimote, it's using a package called WiiUse, a briliant library to use a Wiimote.

![](/data/blog/morpheus.jpg)

The problem, because there's always a problem. After 6-8 hours, your batteries are dead. I loved too much this solution, so I had to investigate and find a solution. Google didn't helped me about that, well, at first I had to discover they were using this library. Many searches without results, then a keyword bring me to a piece of code from this library. That was a comment about the function DisableMotionSensing. At that point, I realised the Wiimote was constantely sending motion sensor informations, it explains why the battery is flat after few hours. In our case, we just want the button actions, we don't mind about the accelerometer or the IR sensor.

I had what I needed, a reason, and a part of solution (: DisableMotionSensing). Let's have a look to the code and add this function just after connection:

*Wiimote_Wiiuse.cpp*

```
int connectWiimote(wiimote** wiimotes) // line 115
{
  int found = 0;
  int connected = 0;
  wiimote* wm;
  ...
  if (connected)
  {
    EventClient.SendHELO(\"Wii Remote\", ICON_PNG, NULL);.
    wiiuse_set_leds(wm, WIIMOTE_LED_1);
    wiiuse_rumble(wm, 1);
    wiiuse_set_orient_threshold(wm,1);
    <strong>DisableMotionSensing(wm);</strong>
    #ifndef WIN32
      usleep(200000);
    #else
      Sleep(200);
    #endif
    wiiuse_rumble(wm, 0);

    return 1;
  }
  return 0;
}

int main(int argc, char** argv) // line 195
{
  ...
  for (int i = 0; i < MAX_WIIMOTES; ++i)
  //MAX_WIIMOTES hardcoded at 1.
  {
    <strong>DisableMotionSensing(wm);</strong>
    switch (wiimotes[i]->event).
    {
    case WIIUSE_EVENT:

      controller.get_keys(wm);  //Load up the CWiiController
      controller.handleKeyPress();
      if (!controller.m_buttonHeld && (controller.m_holdableHeld || controller.m_repeatableHeld))
      {
        //Prepare to repeat or hold. Do this only once.
        timeout = getTicks();
        <strong>// EnableMotionSensing(wm);</strong>
        controller.m_abs_roll = 0;
        controller.m_abs_pitch = 0;
        controller.m_start_roll = 0;
        controller.m_start_pitch = 0;
      }
      if (controller.m_buttonReleased)
      {
        DisableMotionSensing(wm);
        controller.m_currentAction = ACTION_NONE;
      }
    ...
}
```

After that you can recompile, restart, connect your Wiimote. I've mention no particular issues, it's seems to work well, and the batteries last longer.

If you had the same problem, I hope I helped you. Contact me if you have any questions.
