package com.example.test.repository;

import com.example.test.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;


public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>();
    private static Long sequence = 0L;
    private static Map<String, String> address = new HashMap<>();

    @Override
    public Member save(Member member) {
        member.setId(++sequence);
        member.setStatus("배송 준비 중");
        store.put(member.getId(), member);
        address.put(member.getName(), member.getAddress());
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name))
                .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore(){
        store.clear();
    }

}
