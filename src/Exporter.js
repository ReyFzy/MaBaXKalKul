import React from "react";
import './App.css';
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes , Route , useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Layout from "./layouts/Layout";
import { HeadSection } from "./components/HeadSection";
import { MenuSection } from "./components/MenuSection";
import { SwitchMenu } from "./components/SwitchMenu";
import { SwitchButton } from "./components/SwitchButton";
import { FooterSection } from "./components/FooterSection";


export{
    React,
    useState,
    useEffect,
    Router,
    Routes,
    Route,
    useNavigate,
    Home,
    Layout,
    HeadSection,
    MenuSection,
    SwitchMenu,
    SwitchButton,
    FooterSection,
}