import { Module } from 'vuex'
import { RootState } from '@/store'

interface DetailState {}

const detailModule: Module<DetailState, RootState> = {
  namespaced: true,
}
