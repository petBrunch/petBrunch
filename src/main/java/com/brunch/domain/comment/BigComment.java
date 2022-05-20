package com.brunch.domain.comment;

import com.brunch.domain.util.TimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BigComment extends TimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "bigComment_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(length = 1000, nullable = false)
    private String content;

    private boolean isDeleted;
}
